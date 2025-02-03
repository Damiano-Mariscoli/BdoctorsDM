import Card from "react-bootstrap/Card";

export default function DoctorCard({ doctor }) {
  const { last_name, first_name, spec, image } = doctor;

  return (
    <div className="">
      <Card className="h-100 cardD d-flex">
        <Card.Header
          className="p-0 d-flex"
          style={{ height: "200px", backgroundColor: "#f8f9fa" }}
        >
          <Card.Img
            variant="top"
            src={
              doctor.image
                ? `${import.meta.env.VITE_ENV_URI}/uploads/img/${doctor.image}`
                : `${import.meta.env.VITE_ENV_URI}/img/doctorplaceholder.png`
            }
            alt={`${doctor.first_name} ${doctor.last_name} profile`}
            style={{
              objectFit: "cover",
              objectPosition: "50% 9%",
              minWidth: "150px",
              aspectRatio: "1/2",
            }}
          />
        </Card.Header>
        <Card.Body>
          <Card.Title className="text-center">{`${first_name} ${last_name}`}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-center">
            {spec}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
}
