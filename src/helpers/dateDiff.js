export default (date) => {
    const diff = new Date() - new Date(date);
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diff / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diff / (1000 * 60));
    const diffSeconds = Math.floor(diff / (1000));
    if (diffDays > 0) {
        return diffDays + " days ago";
    } else if (diffHours > 0) {
        return diffHours + " hours ago";
    } else if (diffMinutes > 0) {
        return diffMinutes + " minutes ago";
    } else {
        return diffSeconds + " seconds ago";
    }
}