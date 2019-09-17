class Api::CommentsController < ApplicationController
  before_action :set_comments, only: [:show, :update, :destroy]
  before_action :set_item

  def index
    render json: @item.comments
  end

  def show
    render json: @comment
  end

  def create
    comment = @item.comments.new(comment_params)
    if comment.save
      render json: comment
    else
      render json: {errors: @comment.error}, status: :unprocessable_entity
    end
  end

  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: {errors: @comment.error}, status: :unprocessable_entity
    end
  end

  def destroy
    @comment.destroy
    render json: {message: "Comment Deleted #{@comment}"}
  end

  private
    
    def set_comments
      @comment = Comment.find(params[:id])
    end

    def set_item
      @item = Item.find(params[:item_id])
    end

    def comment_params
      params.require(:comment).permit(:title, :body)
    end
end
