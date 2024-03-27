export default function NotificationBanner(props) {
    return (
        <div id="notif-banner">
            <h2 id="notif-banner-title">{props.title}</h2>
            <div id="notif-banner-info">
                <h3>Alberta Post COVID-19 Survey</h3>
                <p>Help us learn more about your health during the COVID-19
                    pandemic by taking part in a survey supported by the
                    University of Alberta, Alberta Health, and Alberta Health
                    Services. Please take the survey if you are 18 years and
                    older and have tested positive or negative for COVID-19 by
                    a PCR or rapid test. <a href="#">Take the survey</a>.</p>
            </div>
        </div>
    )
}