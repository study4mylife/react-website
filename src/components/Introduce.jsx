import {Container, ImageList, ImageListItem } from "@mui/material";

function Introduce() {
    const images = [
    {
        img: "src/assets/pexels-agk42-2599244.jpg",
        title: "Image",

    },
    {
        img: "src/assets/pexels-thepaintedsquare-1666315.jpg",
        title: "Image",

    },
    {
        img: "src/assets/pexels-cottonbro-6153354.jpg",
        title: "Image",

    },
    {
        img: "src/assets/pexels-agk42-2599244.jpg",
        title: "Image",
    },

    {
        img: "src/assets/pexels-thepaintedsquare-1666315.jpg",
        title: "Image",
    },
    {
        img: "src/assets/pexels-cottonbro-6153354.jpg",
        title: "Image",
    },
    ]
    return (
        <>
        <ImageList variant="masonry" sx={{maxWidth: '50%', mx: 'auto'}} cols={3} gap={8}>
            {images.map((item) => (
                <ImageListItem key={item.img}>
                <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
        </ImageList>
        <Container sx={{textAlign: 'center'}}>
            <p>11</p>

        </Container>
        </>
    );

}

export default Introduce;
