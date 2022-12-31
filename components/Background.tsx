import Image from "next/legacy/image";
import styles from "../styles/styles.module.css";

export default function BackgroundPage(props: { weather: string }) {
  return (
    <div className={styles.bgWrap}>
      <Image
        alt="background"
        src={`/weather_pics/${props.weather}.jpg`}
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
}
