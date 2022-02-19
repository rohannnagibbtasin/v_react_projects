import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { PeopleOutlineTwoTone } from '@material-ui/icons';
import Header from '../Components/Header';
import PageHeader from '../Components/PageHeader';
import Employee from '../Employees/Employee';
import './App.css';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#333996',
            light: '#3c44b126',
        },
        secondary: {
            main: '#f83245',
            light: '#f8324526',
        },
        background: {
            default: '#f4f5fd',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Header />
                <PageHeader
                    title="Page Header"
                    subTitle="Page description"
                    icon={<PeopleOutlineTwoTone fontSize="large" />}
                />
                <Employee />
            </div>
            <CssBaseline />
        </ThemeProvider>
    );
}

export default App;
