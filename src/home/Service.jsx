import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Service() {
  return (
    <div className="p-10 flex justify-center">
      <div className="mt-10">
        <h1 className="font-extrabold text-4xl text-center mb-10">Service</h1>
        <div className="flex space-x-6 text-center">
          <Card className="w-96 bg-gray-900 text-white p-6">
            <CardBody className="h-96 flex flex-col justify-center">
              <Typography variant="h5" className="mb-4">
                Sunday Service
              </Typography>
              <Typography className="mb-4">
                Time: 9:00 AM - 11:00 AM
              </Typography>
              <Typography>
                Day: Sunday
              </Typography>
              <CardFooter className="pt-4">
                <Button color="blue">Join Service</Button>
              </CardFooter>
            </CardBody>
          </Card>

          <Card className="w-96 bg-gray-900 text-white p-6">
            <CardBody className="h-96 flex flex-col justify-center">
              <Typography variant="h5" className="mb-4">
                Kids Ministry
              </Typography>
              <Typography className="mb-4">
                Time: 10:00 AM - 11:00 AM
              </Typography>
              <Typography>
                Day: Saturday
              </Typography>
              <CardFooter className="pt-4">
                <Button color="blue">Join Ministry</Button>
              </CardFooter>
            </CardBody>
          </Card>

          <Card className="w-96 bg-gray-900 text-white p-6">
            <CardBody className="h-96 flex flex-col justify-center">
              <Typography variant="h5" className="mb-4">
                Prayer Meeting
              </Typography>
              <Typography className="mb-4">
                Time: 6:00 PM - 7:00 PM
              </Typography>
              <Typography>
                Day: Wednesday
              </Typography>
              <CardFooter className="pt-4">
                <Button color="blue">Join Meeting</Button>
              </CardFooter>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
