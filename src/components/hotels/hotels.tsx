import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin } from "lucide-react"

// Dummy data for hotels
const hotels = [
  {
    id: 1,
    name: "Luxury Resort & Spa",
    location: "Maldives",
    rating: 4.8,
    price: 299,
    image: "https://cache.marriott.com/content/dam/marriott-renditions/MSPTR/msptr-exterior-6262-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*"
  },
  {
    id: 2,
    name: "City Center Hotel",
    location: "New York",
    rating: 4.5,
    price: 199,
    image: "https://cache.marriott.com/is/image/marriotts7prod/tx-msptr-fb-entrance-33866:Wide-Hor?wid=1336&fit=constrain"
  },
  {
    id: 3,
    name: "Mountain View Lodge",
    location: "Swiss Alps",
    rating: 4.7,
    price: 249,
    image: "https://cache.marriott.com/is/image/marriotts7prod/tx-msptr-msptr-staircase-hor-5370-11049:Wide-Hor?wid=1336&fit=constrain"
  },
  {
    id: 4,
    name: "Beachfront Bungalows",
    location: "Bali",
    rating: 4.6,
    price: 179,
    image: "https://cache.marriott.com/content/dam/marriott-renditions/MSPTR/msptr-front-desk-4254-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*"
  },
  {
    id: 5,
    name: "Historic Downtown Inn",
    location: "Prague",
    rating: 4.4,
    price: 149,
    image: "https://cache.marriott.com/content/dam/marriott-renditions/MSPTR/msptr-corner-king-4260-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*"
  },
  {
    id: 6,
    name: "Skyline Penthouse Suites",
    location: "Dubai",
    rating: 4.9,
    price: 399,
    image: "https://cache.marriott.com/is/image/marriotts7prod/tx-msptr-king-studio-61276:Wide-Hor?wid=1336&fit=constrain"
  }
]

export default function HotelCards() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Filtered Hotels</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <Card key={hotel.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <img
                src={hotel.image}
                alt={hotel.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-xl mb-2">{hotel.name}</CardTitle>
              <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 mr-1 text-gray-500" />
                <span className="text-sm text-gray-600">{hotel.location}</span>
              </div>
              <div className="flex items-center mb-2">
                <Star className="w-4 h-4 mr-1 text-yellow-500" />
                <span className="text-sm font-semibold">{hotel.rating}</span>
                <span className="text-sm text-gray-600 ml-1">/ 5</span>
              </div>
              <div className="text-lg font-bold text-primary">
                ${hotel.price} <span className="text-sm font-normal text-gray-600">per night</span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full">See Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}