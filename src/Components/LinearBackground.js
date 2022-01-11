import { Box } from '@mui/system';

const LinearBackground = () => {
    // const [visible, setVisible] = useState(true)
    // if (window.innerWidth < 1790) {
    //     setVisible(false)
    // }

    console.log(window.innerWidth);
    return (
        <>

            {
                window.innerWidth > 993 &&
                <Box
                    sx={{
                        position: 'absolute',
                        width: '349.94px',
                        height: '910.86px',
                        left: '331px',
                        top: '-138px',
                        background: '#5454d457',
                        filter: 'blur(199.107px)',
                        borderRadius: '154.972px',
                        transform: 'rotate(-54.37deg)',
                    }}
                />

            }

            {
                window.innerWidth > 1790 &&
                <Box
                    sx={{
                        position: 'absolute',
                        width: '309.94px',
                        height: '928.7px',
                        left: '1129.3px',
                        top: '106.85px',
                        // background: 'linear-gradient(180deg, rgba(251, 168, 28, 0.11)  10.6%, rgba(224, 86, 136, 0.06) 100 %)',
                        backgroundColor: 'rgb(44,35,31)',
                        filter: 'blur(199.107px)',
                        borderRadius: '154.972px',
                        transform: 'rotate(65.71deg)'
                    }}
                />

            }
            {
                window.innerWidth > 994 &&
                < Box
                    sx={{
                        position: 'absolute',
                        width: '309.94px',
                        height: '337.48px',
                        left: '-207.07px',
                        top: '1360.3px',
                        background: '#5454d457',
                        filter: 'blur(199.107px)',
                        borderRadius: '154.972px',
                        transform: 'rotate(-54.37deg)',
                    }}
                />
            }

            {
                window.innerWidth > 1669 &&
                <Box
                    sx={{
                        position: 'absolute',
                        width: '570.77px',
                        height: '1420.24px',
                        left: '604.24px',
                        top: '1167.43px',
                        backgroundColor: 'rgb(33,29,28)',
                        filter: 'blur(199.107px)',
                        borderRadius: '154.972px',
                        transform: 'rotate(65.71deg)'
                    }} />
            }

            {
                window.innerWidth > 1502 &&
                <Box
                    sx={{
                        position: 'absolute',
                        width: '207.93px',
                        height: ' 433.29px',
                        left: '1147.66px',
                        top: '2077.56px',
                        background: '#5454d457',
                        filter: 'blur(199.107px)',
                        borderRadius: '154.972px',
                        transform: 'matrix(-0.58, -0.81, -0.81, 0.58, 0, 0)'
                    }}
                />

            }
        </>
    );
};

export default LinearBackground;