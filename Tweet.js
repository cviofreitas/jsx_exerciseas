const Tweet = ({ username, name, date, message }) => {
    return (
        <div class="tweet">
            <p class="message">{message}</p>
            <p class="username">{username}</p>
            <p class="date">{date}</p>
            <p class="name">{name}</p>

        </div>
    )
}