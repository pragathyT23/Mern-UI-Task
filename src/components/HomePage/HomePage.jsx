import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import InfoIcon from '@mui/icons-material/Info';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import './HomePage.css';
import API from '../../helpers/api';
import {steps,productOptions,salesOptions,branchOptions,brandOptions} from '../../helpers/constants';

export default function HomePage() {
  const [brandError, setBrandError] = React.useState('');
  const [salesTypeError, setSalesTypeError] = React.useState('');
  const [productTypeError, setProductTypeError] = React.useState('');
  const [branchCode, setBranchCode] = React.useState('');
  const [brand, setBrand] = React.useState('');
  const [salesType, setSalesType] = React.useState('');
  const [productType, setProductType] = React.useState('');
  const saveForm = () => {
    if (brand == '' || brand == null || brand == undefined) {
      setBrandError("Please select a Brand");
    }
    if (salesType == '' || salesType == null || salesType == undefined) {
      setSalesTypeError("Please select a Sales Type");
    }
    if (productType == '' || productType == null || productType == undefined) {
      setProductTypeError("Please select a Product Type");
    }
    if (salesTypeError == '' && brandError == '' && productTypeError == '') {
      let formData = {
        branchCode: branchCode,
        brand: brand,
        salesType: salesType,
        productType: productType
      }
      const headers = { 'Content-Type': 'text/plain;charset=utf-8' };
      axios.get(API.TEST_ENDPOINT, { formData }, { headers: headers }).then(res => {
        console.log("Form Data--", formData);
      }).catch((error) => {
        console.error('errors' + error);
      });
    }
  }
  const branchCodeChange = (event: SelectChangeEvent) => {
    setBranchCode(event.target.value);
  };
  const brandChange = (event: SelectChangeEvent) => {
    setBrand(event.target.value);
  };
  const salesTypeChange = (event: SelectChangeEvent) => {
    setSalesType(event.target.value);
  };
  const productTypeChange = (event: SelectChangeEvent) => {
    setProductType(event.target.value);
  };
  return (
    <>
      <Box sx={ { width: '100%' } }>
        <Badge badgeContent={ 4 } color="error" style={ { color: 'red', fontWeight: 'bold' } }>
          <InfoIcon color="action" style={ { color: 'red', fontWeight: 'bold' } } />
        </Badge>
        <SettingsApplicationsRoundedIcon color="primary" style={ { float: 'right' } } />
        <Stepper className="steper-main" activeStep={ 1 } alternativeLabel>
          { steps.map((label) => (
            <Step key={ label }>
              <StepLabel>{ label }</StepLabel>
            </Step>
          )) }
        </Stepper>
        <Card className="box-2" sx={ { minWidth: 275, marginTop: '13px', textAlign: 'center' } }>
          <CardContent className="info-box">
            <Typography variant="span" component="span" sx={ { fontSize: 14 } } style={ { color: 'black', position: 'relative', top: '0px', right: '3%' } }>After</Typography>
            <Typography variant="span" component="span" sx={ { fontSize: 14 } } style={ { backgroundColor: 'red', color: 'white', position: 'relative', paddingRight: '5px', paddingLeft: '5px', right: '2%', borderRadius: '5px', paddingTop: '2px', paddingBottom: '2px' } }>4.54</Typography>
            <Typography variant="span" component="span" sx={ { fontSize: 14 } } style={ { color: 'black', position: 'relative', top: '0px', right: '1%' } }>This Page Will Be Refreshed</Typography>
          </CardContent>
        </Card>
        <Typography sx={ { fontSize: 14 } } style={ { textAlign: 'center', marginTop: '5px', fontWeight: '900' } } variant="h1" component="h1" color="error">
          Enter Clock In Information
        </Typography>
        <div className="row mt-5">
          <div className='col-md-6 float-child-left'>
            <FormControl fullWidth>
              <Typography sx={ { fontSize: 14 } } style={ { marginTop: '5px', fontWeight: '900', color: 'black' } } variant="h1" component="h1">
                Branch Code
              </Typography>
              <Select
                labelId="branch-code"
                id="branch-code-id"
                value={ branchCode }
                onChange={ branchCodeChange }
              >
                { branchOptions.map(name =>
                  <MenuItem fullwidth={ `true` } key={ name.key } value={ name.key }>
                    { name.value }
                  </MenuItem>
                ) }
              </Select>
            </FormControl>
          </div>
          <div className='col-md-6 float-child-right'>
            <FormControl fullWidth>
              <Typography sx={ { fontSize: 14 } } style={ { marginTop: '5px', fontWeight: '900', color: 'black' } } variant="h1" component="h1">
                Branch:
              </Typography>
              <TextField id="outlined-basic"
                InputProps={ {
                  readOnly: true
                } }
                placeholder="store name" variant="outlined" />
            </FormControl>
          </div>
        </div>
        <div style={ { marginTop: '20px' } }>
          <Typography sx={ { fontSize: 14 } } style={ { fontWeight: '900', color: 'black' } } variant="h1" component="h1">
            Brand<span style={ { color: 'red' } }> *</span>
          </Typography>
          <FormControl fullWidth>
            <Select
              value={ brand }
              onChange={ brandChange }
            >
              { brandOptions.map(name =>
                <MenuItem fullwidth={ `true` } key={ name.key } value={ name.key }>
                  { name.value }
                </MenuItem>
              ) }
            </Select>
            <span style={ { color: "red" } }>{ brandError }</span>
          </FormControl>
        </div>
        <div style={ { marginTop: '20px' } }>
          <Typography sx={ { fontSize: 14 } } style={ { marginTop: '5px', fontWeight: '900', color: 'black' } } variant="h1" component="h1">
            Sales Type<span style={ { color: 'red' } }> *</span>
          </Typography>
          <FormControl fullWidth>
            <Select
              value={ salesType }
              onChange={ salesTypeChange }
            >
              { salesOptions.map(name =>
                <MenuItem fullwidth={ `true` } key={ name.key } value={ name.key }>
                  { name.value }
                </MenuItem>
              ) }
            </Select>
            <span style={ { color: "red" } }>{ salesTypeError }</span>
          </FormControl>
        </div>
        <div style={ { marginTop: '20px' } }>
          <Typography sx={ { fontSize: 14 } } style={ { marginTop: '5px', fontWeight: '900', color: 'black' } } variant="h1" component="h1">
            Product Type<span style={ { color: 'red' } }> *</span>
          </Typography>
          <FormControl fullWidth>
            <Select
              value={ productType }
              onChange={ productTypeChange }
            >
              { productOptions.map(name =>
                <MenuItem fullwidth={ `true` } key={ name.key } value={ name.key }>
                  { name.value }
                </MenuItem>
              ) }
            </Select>
            <span style={ { color: "red" } }>{ productTypeError }</span>
          </FormControl>
        </div>
        <div className="col-md-3" style={ {
          display: 'flex', justifyContent: 'center',
          alignItems: 'center', marginTop: "20px"
        } }>
          <Button variant="contained" onClick={ saveForm }>Save</Button>
        </div>
      </Box >
    </>
  );
}