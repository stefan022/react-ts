import React from 'react'
import { Link } from 'react-router-dom'

interface IProps {
    route: string;
    categoryName: string;
}

const Category = ({ route, categoryName }: IProps) => <Link to={route}><li>categoryName</li></Link>

export default Category