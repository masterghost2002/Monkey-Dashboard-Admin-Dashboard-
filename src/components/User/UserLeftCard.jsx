import { Card, CardHeader, AvatarImage, InfoContainer, Detail, CardBody } from "./CardComponents";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function UserLeftCard() {
    return (
        <Card flex='2'>
            <CardHeader bp={true}>
                <AvatarImage
                    src='https://hips.hearstapps.com/hmg-prod/images/paul-walker-21044993-1-402.jpg'
                    width='40px'
                    height='40px'
                    br='50%'
                />
                <InfoContainer ml='20px' mb='10px'>
                    <Detail fw='600'>Paul Walker</Detail>
                    <Detail color='#808080' fw='500'>Racer, Officer</Detail>
                </InfoContainer>
            </CardHeader>
            <CardBody>
                <Detail fs='18px' color='#A9A9A9' fw='500' mt='20px' mb='20px'>Account Detail</Detail>
                <InfoContainer mt='10px' mb='10px'>
                    <Detail><Person2OutlinedIcon sx={{ marginRight: '10px', fontSize: '20px' }} /> paulwalker111</Detail>
                </InfoContainer>
                <InfoContainer mt='10px' mb='10px'>
                    <Detail><CalendarTodayIcon sx={{ marginRight: '10px', fontSize: '20px' }} /> 12.09.1973</Detail>
                </InfoContainer>

                <Detail fs='18px' color='#A9A9A9' fw='500' mt='20px' mb='20px'>Contact Detail</Detail>
                <InfoContainer mt='10px' mb='10px'>
                    <Detail><PhoneIcon sx={{ marginRight: '10px', fontSize: '20px' }} /> +1 123 456 7890</Detail>
                </InfoContainer>
                <InfoContainer mt='10px' mb='10px'>
                    <Detail><MailOutlineIcon sx={{ marginRight: '10px', fontSize: '20px' }} /> paulwalker111@mail.com</Detail>
                </InfoContainer>
                <InfoContainer mt='10px' mb='10px'>
                    <Detail><LocationOnIcon sx={{ marginRight: '10px', fontSize: '20px' }} /> KS Fort Riley, KS Burden, KS Buffalo, NY</Detail>
                </InfoContainer>
            </CardBody>
        </Card>
    )
}
