class IndexController < ApplicationController
    before_action :set_ticket, only: [:show, :update, :destroy]
    before_action :authenticate_user!, only: [:update, :destroy, :create]
    skip_before_action :verify_authenticity_token
    skip_before_filter :require_no_authentication, only: [index]

    def index 
        @tickets = Ticket.all
        if current_user == nil
            @my_tickets = []
        else
            @my_tickets = current_user.tickets.all
        end
        render json: { tickets:@tickets, myTickets:@my_tickets}
    end

end
