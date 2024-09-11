// Mob-Nav

export const menuSlide = {
    initial: {
        x: "100%"
    },
    enter: {
        x: "-20%",
        transition: { duration: 0.6, ease: [0.45, 0, 0.55, 1] }
    },
    exit: {
        x: "80%",
        transition: { duration: 0.6, ease: [0.45, 0, 0.55, 1] }
    }
}
export const slide = {
    initial: {
        x: "80px"
    },
    enter: (i) => (
        {
            x: "0",
            transition: { duration: 0.4, ease: [0.45, 0, 0.55, 1], delay: 0.05 * i }

        }
    ),
    exit: (i) => (
        {
            x: "80px",
            transition: { duration: 0.4, ease: [0.45, 0, 0.55, 1], delay: 0.05 * i }

        }
    )
}


// skill section

export const icon = {
    initial: {

        opacity: 0
    },
    whileInView: (i) => (
        {
            opacity: 1,
            transition: { duration: 0.4, ease: [0.45, 0, 0.55, 1], delay: 0.05 * i }

        }
    )
}


// Therapeutic

export const cards = {
    initial: {
        y: [0, 0],
        opacity: 0
    },
    whileInView: (i) => (
        {
            y: [50, 0],
            transition: { duration: 0.4, ease: [0.45, 0, 1, 1], delay: 0.2 * i },
            opacity: 1

        }
    ),

}

// Product Range
export const popUpCard = {
    initial: {
        scale: 0.5,
        opacity: 0
    },
    whileInView: (i) => (
        {
            scale: 1,
            transition: { duration: 0.4, ease: [0.45, 0, 1, 1], delay: 0.2 * i },
            opacity: 1

        }
    ),

}