// import { createTheme } from '@mui/material/styles';
// import { blue, lightBlue } from '@mui/material/colors';
// import { purple } from '@mui/material/colors';
// export const theme = createTheme({
//     palette: {
//         primary: {
//             main: blue[500]
//         },
//         secondary: {
//             main: lightBlue[800],
//             midNightBlue: "#003366"
//         },
//     }
    
// });
// import { createTheme } from '@mui/material/styles';
// import { purple } from '@mui/material/colors';

// export const theme = createTheme({
//   palette: {
//     primary: {
//       // main: purple[500],
      
//       main: '#3f0b54',
//     },
//     secondary: {
//       main:'#30075c',
//       // main:'#2f055c',
//       // main:'#401252',
//     },
//   },
// });


// import { createTheme } from '@mui/material/styles';
// import { blue, lightBlue } from '@mui/material/colors';

// export const theme = createTheme({
//     palette: {
//         primary: {
//             main: blue[500]
//         },
//         secondary: {
//             main: lightBlue[800],
//             midNightBlue: "#003366"
//         }
//     }
// });




// import { createTheme } from '@mui/material/styles';
import { blue, grey, lightBlue, purple} from '@mui/material/colors';

// export const theme = createTheme({
//     palette: {
//         primary: {
//             main: blue[500]
//         },
//         secondary: {
//             main: lightBlue[800],
//             midNightBlue: "#003366"
//         }
//     }
// });

export const themeColors = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                    // main:purple[500],
                    // background: 'linear-gradient(to right bottom, #430089, #82ffa1)',
                    // main: "#311432",
                //    main:"#5729CE",
                //    main: '#3f0b54',
                   main:"#8c196a",
                    white: "#fff"
                },
                secondary: {
                    // main: lightBlue[800],
                    // main: "#301934",
                    box: '#3f0b54',//dark purple
                    main:"#6a11cb", //purple
                    midNightBlue: "#003366",
                  
                },
                
            }
            : {
                // palette values for dark mode
                primary: {
                    main: "#003366",
                    white: "#003366",
                    footw:"#fff"
                },
                secondary: {
                    main: blue[500],
                    midNightBlue: "#2196f3"
                },
                background: {
                    default: "#1e1e1e",
                },
                text: {
                    primary: '#fff',
                    secondary: grey[500],
                },
            }),
    },
});