import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: "flex-start",
    minHeight: '100vh',
    justifyContent: 'center'
})

export const Header = styled('header', {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1100,
    margin: '0 auto',

    button: {
        position: 'relative',
        border: 'none',
        backgroundColor: '$gray800',
        padding: '0.75rem',
        borderRadius: '0.375rem',
        cursor: "pointer",

        span: {
            display: 'flex',
            justifyContent: 'center',
            border: '3px solid $gray900',
            position: 'absolute',
            color: '$white',
            width: '1.7rem',
            height: '1.7rem',
            backgroundColor: '$green500',
            borderRadius: '50%',
            bottom: '2rem',
            left: '2rem',

            textAlign: 'center',
            fontFamily: 'Roboto',
            fontSize: '0.875rem',
            fontWeight: 700,
            lineHeight: '160%',
        }
    }
})