import appConfig from '../app.config'
var ago = require('s-ago');
const AlertCard = ({ alert }) =>{
    let type=appConfig.alertTypes.filter(val=>val.type == alert.type).pop()
return <a className="dropdown-item d-flex align-items-center" href="#">
<div className="mr-3">
    <div className={["icon-circle",type.bgClass].join(' ')}>
        <i className={["fas",type.icon].join(' ')}></i>
    </div>
</div>
<div>
    <div className="small text-gray-500">{ago(new Date(alert.time))}</div>
    <span className="font-weight-bold">{alert.message}</span>
</div>
</a>;
};

export default AlertCard;