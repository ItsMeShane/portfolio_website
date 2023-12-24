


const Photo = () => {
    return (
        <img
            src="/images/face.png"
            alt="Face"
            style={{
                maxWidth: "400px",
                userDrag: "none",
                userSelect: "none",
                MozUserSelect: "none",
                WebkitUserDrag: "none",
                WebkitUserSelect: "none",
                msUserSelect: "none"
            }}
        />
    );
};

export default Photo;