import  { useEffect, useState } from "react";
import { Container,} from "react-bootstrap";
import styled from "styled-components";


const Wrapper = styled.div`
    padding-top: 50px;
    margin: 0 auto;
`;

const Paragraph = styled.h2`
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
`;


export default function Gallery() {
    const [advice, setAdvice] = useState("");
    
    useEffect(() => {
        const url = "https://api.adviceslip.com/advice";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setAdvice(json.slip.advice);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);
   
    return (
        <>
            <section className="gallery d-flex justify-content-center align-products-center text-center pt-5 pb-5">
                <Container>
                    <div>
                        <Paragraph>PIZZA HOUSE GALLERY</Paragraph>
                        <p className="text-black">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Accusantium sit aliquid, suscipit velit quia,
                            pariatur repellat ducimus voluptates ex eaque
                            numquam quaerat blanditiis quibusdam labore
                        </p>
                    </div>
                    <Wrapper>
                        <h1>Some fun text.</h1>
                        <Paragraph>{advice}</Paragraph>
                    </Wrapper>
                </Container>
            </section>
        </>
    );
}
