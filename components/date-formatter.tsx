import { parseISO, format } from "date-fns";
import styles from "../styles/DateFormatter.module.scss";

type Props = {
    dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
    const date = parseISO(dateString);
    return <time className={styles.time} dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
};

export default DateFormatter;
