import { MouseEventHandler } from 'react'

interface IProps {
    displayCart: boolean;
    handleHideCart: MouseEventHandler<HTMLDivElement>
}   

const CartOverlay = ({ displayCart, handleHideCart }: IProps) => {
    return (
        <div 
			onClick={handleHideCart}
			className={`${displayCart ? "opacity-50" : "opacity-0 hidden"} fixed top-0 left-0 w-full h-screen bg-black transition-all duration-500 z-20`}>
        </div>
    )
}

export default CartOverlay