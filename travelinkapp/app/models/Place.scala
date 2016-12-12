package models

case class Place(
  id: Int,
  area_id: Int,
  category_id: Int,
  img: String,
  name: String,
  label: String,
  open_hours: String,
  full_address: String
)

object Place {
  import play.api.libs.json.Json

  // Generates Writes and Reads for Feed and User thanks to Json Macros
  implicit val formatter = Json.format[Place]
}