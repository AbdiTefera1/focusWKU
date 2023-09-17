import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export const StyledButton = styled(Link)(()=>({
    color: "#fff",
    background: '#ff3400',
    padding: "1.5rem",
    fontSize: '2rem',
    borderRadius: '25px',
    textDecoration: 'none',
    
}))