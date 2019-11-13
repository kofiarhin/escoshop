import moment from "moment";

const genDate = () => {
    const date = moment(new Date()).format("YY/MM/DD h:mmA");

    return date;
}


const defaultImage = "https://icon-library.net/images/default-user-icon/default-user-icon-14.jpg"

export { genDate, defaultImage }