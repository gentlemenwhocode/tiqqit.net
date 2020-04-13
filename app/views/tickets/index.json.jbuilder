json.array! @tickets do |ticket|
    json.id @ticket.id
    json.title @ticket.title
    json.image_url polymorphic_url(@ticket.image) if @ticket.image.attached?
end