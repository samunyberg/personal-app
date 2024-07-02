import ContactForm from "./contactForm/ContactForm";
import InfoList from "./infoList/InfoList";
import MediaCard from "./mediaCard/MediaCard";
import styles from "./profile.module.css";

const Profile = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Profile</h2>
      <hr className={styles.hr} />
      <div className={styles.content}>
        <div className={styles.info}>
          <MediaCard />
          <InfoList />
        </div>
        <hr className={styles.hrMobile} />
        <div className={styles.contact}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Profile;
