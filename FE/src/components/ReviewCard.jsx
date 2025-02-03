import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

export default function ReviewCard({ reviews }) {
  const { first_name, last_name, vote, email, review } = reviews;

  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < vote) {
      stars.push(faStarSolid);
    } else {
      stars.push(faStarRegular);
    }
  }

  return (
    <div className="mt-2 border-top p-1">
      <p>
        <strong>Nome:</strong> {first_name}
      </p>
      <p>
        <strong>Cognome:</strong> {last_name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Recensione:</strong> {review}
      </p>
      <p>
        <strong>Voto:</strong>
        <span>
          {stars.map((star, i) => (
            <FontAwesomeIcon key={i} icon={star} />
          ))}
        </span>
      </p>
    </div>
  );
}
