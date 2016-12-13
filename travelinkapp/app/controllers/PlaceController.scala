package controllers

import javax.inject.Inject

import scala.concurrent.Future

import play.api.Logger
import play.api.mvc.{ Action, Controller }
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.json._

// Reactive Mongo imports
import reactivemongo.api.Cursor

import play.modules.reactivemongo.{ // ReactiveMongo Play2 plugin
  MongoController,
  ReactiveMongoApi,
  ReactiveMongoComponents
}

import reactivemongo.api.ReadPreference

// BSON-JSON conversions/collection
import reactivemongo.play.json._
//import play.modules.reactivemongo.json.collection._ // deprecated
import reactivemongo.play.json.collection.JSONCollection

class PlaceController @Inject() (
  val reactiveMongoApi: ReactiveMongoApi) extends Controller
    with MongoController with ReactiveMongoComponents {
	
	def placesFuture: Future[JSONCollection] = database.map(_.collection[JSONCollection]("places"))

	import play.api.data.Form
	import models._

	def find() = Action.async {
		// let's do our query
		val futurePlacesList: Future[List[Place]] = placesFuture.flatMap {
		// find all places
		_.find(Json.obj()).
		// perform the query and get a cursor of JsObject
		cursor[Place](ReadPreference.primary).
		// Coollect the results as a list
		collect[List]()
		}

		// everything's ok! Let's reply with a JsValue
		futurePlacesList.map { places =>
			Ok(Json.toJson(places))
		}
  }

  def findByAreaCategory(area_id: Int, cat_id: Int) = Action.async {

		var jsonQuery = Json.obj()

		if(area_id != 0 && cat_id != 0){
			jsonQuery = Json.obj("area_id" -> area_id, "category_id" -> cat_id)
		}

  		// let's do our query
		val futurePlacesList: Future[List[Place]] = placesFuture.flatMap {
		// find all places
		_.find(jsonQuery).
		// perform the query and get a cursor of JsObject
		cursor[Place](ReadPreference.primary).
		// Coollect the results as a list
		collect[List]()
		}

		// everything's ok! Let's reply with a JsValue
		futurePlacesList.map { places =>
			Ok(Json.toJson(places))
		}
  }
}