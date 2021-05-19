require 'uri'
require 'net/http'
require 'openssl'
require'json'

CURRENCIES = {
  "BRL": "5.400",
  "EUR": "0.920",
  "CAD": "1.440"
}

class Api::Crypto::BtcController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    api_result = update_api_value
    api_update_currency(api_result)
    return render json: api_result, status: :ok
  end

  def update_currencies
    if CURRENCIES.keys.include? params[:currency].upcase && defined?(params[:token])
      CURRENCIES[params[:currency].upcase] = params[:value].to_s
      return render json: { message: "Valor alterado com sucesso!" },  status: :ok
    else
      return render json: { message: "Valor alterado com sucesso!" },  status: :unauthorized
    end
  end

  def currencies
    return render json: CURRENCIES, status: :ok
  end

  def fetch_crypto_api_default
    url = URI("https://api.coindesk.com/v1/bpi/currentprice.json")
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    
    request = Net::HTTP::Get.new(url)  
    response = http.request(request)
    JSON.parse response.read_body   
  end

  def fetch_crypto(code)
    url = URI("https://api.coindesk.com/v1/bpi/currentprice/#{code}.json")
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    
    request = Net::HTTP::Get.new(url)  
    response = http.request(request)
    JSON.parse response.read_body   
  end

  def update_api_value
    api_result = fetch_crypto_api_default
    api_cad = fetch_crypto('cad')
    api_brl = fetch_crypto('brl')
    api_result["bpi"]["CAD"] = api_cad["bpi"]["CAD"] 
    api_result["bpi"]["BRL"] = api_brl["bpi"]["BRL"] 
    api_result["bpi"]["BTC"] = {"code": "BTC", "rate": "1.0000", "description": "Bitcoin", "rate_float": 1}
    api_result
  end

  def api_update_currency(api_result)
    CURRENCIES["BRL"] = api_result["bpi"]["BRL"]["rate_float"].to_s
    CURRENCIES["EUR"] = api_result["bpi"]["EUR"]["rate_float"].to_s
    CURRENCIES["CAD"] = api_result["bpi"]["CAD"]["rate_float"].to_s
  end
end
