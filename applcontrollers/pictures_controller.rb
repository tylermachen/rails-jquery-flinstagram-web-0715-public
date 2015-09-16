class PicturesController < ApplicationController

  def index
    @pictures = Picture.all
  end

  def show
    @picture = Picture.find(params[:id])
    respond_to do |format|
      format.html
      format.js
      format.json { render json: @picture }
    end
  end

  def like
    @picture = Picture.find(params[:id])
    @picture.update_likes(current_user)
  end
end
