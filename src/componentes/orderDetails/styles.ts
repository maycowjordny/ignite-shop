import { styled } from "../../styles";

export const ContainerOrderDetails = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '1.47rem',
    width: '20rem',
    marginBottom: '1.45rem'
})

export const ImageContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(100deg,#1ea483 0%,#7465d4 100%)',
    width: '6rem',
    height: '6rem',
    padding: '0rem 0.22356rem',
    borderRadius: '0.5rem',

})

export const InfoProduct = styled('div', {

    div: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        gap: '0.12rem',


        span: {
            color: '$gray300',
            fontFamily: ' Roboto',
            fontSize: ' 1.125rem',
            fontWeight: 400,
            lineHeight: '160%',
        },

        strong: {
            color: '$gray200',
            fontFamily: 'Roboto',
            fontSize: '1.125rem',
            fontWeight: 700,
            lineHeight: '160%',
        }

    },

    button: {
        background: 'transparent',
        color: '$green500',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem',
        lineHeight: '160%',
        fontWeight: 'bold',
    }
})

