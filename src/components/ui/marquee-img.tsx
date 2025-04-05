const MarqueeImg = ({ img }: { img: string }) => {
    return (
        <img src={img} alt=""
            className='w-44 h-44 xl:w-52 xl:h-52 object-contain grayscale mx-12' />
    )
}

export default MarqueeImg;