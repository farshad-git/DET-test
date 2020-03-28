var ago = require('s-ago');
const MessageCard = ({ message }) =>
    <a className="dropdown-item d-flex align-items-center" href="#">
        <div className="dropdown-list-image mr-3">
            <img className="rounded-circle" src={message.user.image} alt="" />
            <div className="status-indicator bg-success"></div>
        </div>
        <div className="font-weight-bold">
            <div className="text-truncate">{message.message}</div>
            <div className="small text-gray-500">{message.user.name} {message.user.surename} · {ago(new Date(message.time))}</div>
        </div>
    </a>;
MessageCard.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
};

export default MessageCard;