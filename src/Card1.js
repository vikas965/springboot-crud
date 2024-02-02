const Card = (props) => {
    const { title, thumburl,imgurl} = props;
    // console.log(url);
    return (
        <div className="card">
            <img src={thumburl} alt="noimage" width="100px" height="100px"/>
            <h6 className="title">{title}</h6>
            <a href={imgurl}>Clickhere</a>
        </div>

    );
}


export default Card;