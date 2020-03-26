# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1) build BlogPosts controller
class BlogPostsController < ApplicationController
  def index
    # 2) display all the posts  
    @posts = BlogPost.all
  end

  def show
    # 3) display the selected post
    @post = BlogPost.find(params[:id])
  end

  # 4) display the form to create a post
  def new
  end

  def create
    # 5) use params variables to create a post
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def delete
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 6) if the post cannot be deleted, display that post
      redirect_to blog_post_path(@post)
    end
  end

  # 7) put strong params in private methods
  private
  def blog_post_params
    # 8) strong params list only allows title and content to be sent
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9) set up the model
class BlogPost < ApplicationRecord
  # 10) create relationship to comments, a post has many comments
  has_many :comments
end
