import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
  },
  selectEmpty: {
    marginTop: theme.spacing(4),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '15px',
  },
  marginBottom: {
    marginBottom: '20px',
  },
  marginTop: {
    marginTop:'15px',
  },
  list: {
    height: '75vh', overflow: 'auto',margin:'15px',marginTop:'-20px'
  },
}));