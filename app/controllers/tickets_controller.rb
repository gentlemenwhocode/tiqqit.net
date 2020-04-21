class TicketsController < ApplicationController
  before_action :set_ticket, only: [:show, :update, :destroy]
  before_action :authenticate_user!, only: [:update, :destroy, :create]
  skip_before_action :verify_authenticity_token

  
  def index
    @tickets = Ticket.all
    if current_user == nil
      @my_tickets = []
    else
      @my_tickets = current_user.tickets.all
    end
  end

  def create
    @ticket = current_user.tickets.create(ticket_params)
    if @ticket.valid?
      render json: @ticket
    else
      render json: @ticket.errors, status: :unprocessable_entity
    end
  end

  def update
    @ticket = Ticket.find(params[:id])
    @ticket.update_attributes(ticket_params)
    render :show
  end

  def destroy
    @ticket.destroy
  end

  def show
  end

  private
  def set_ticket
    @ticket = Ticket.find(params[:id])
  end
  def ticket_params
    params.require(:ticket).permit(:title, :project_cat, :prob_cat, :priority, :desc, :status, :due_date, :image, :comments)
  end
  
end
