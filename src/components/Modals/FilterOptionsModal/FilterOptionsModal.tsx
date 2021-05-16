import React from "react";
import { Formik } from "formik";

import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  Button,
  Dialog,
  Grid,
} from "@material-ui/core";

import { IFilterOptionsModal } from "./FilterOptionsModal.types";
import {
  DialogActions,
  DialogContent,
  Divider,
  GridItem,
} from "./FilterOptionsModal.styled-components";
import DialogTitle from "./DialogTitle";
import { FiltersInitialValues } from "./FilterInitialValues";

const FilterOptionsModal = ({ handleClick, open }: IFilterOptionsModal) => {
  return (
    <div>
      <Dialog
        onClose={handleClick}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth="lg"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClick}>
          معیارهای موردنظر جهت نمایش را انتخاب نمایید
        </DialogTitle>
        <DialogContent dividers>
          <Formik
            initialValues={Object.fromEntries(FiltersInitialValues)}
            onSubmit={() => console.log("Form Submitted")}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <FormGroup>
                <Grid container spacing={2}>
                  <GridItem item xs={4}>
                    <Typography variant="h4">اطلاعات اولیه</Typography>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.userId}
                          onChange={handleChange}
                          name="userId"
                          color="primary"
                        />
                      }
                      label="شناسه کاربر"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.userType}
                          onChange={handleChange}
                          name="userType"
                          color="primary"
                        />
                      }
                      label="نوع کاربر"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.name}
                          onChange={handleChange}
                          name="name"
                          color="primary"
                        />
                      }
                      label="نام"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.email}
                          onChange={handleChange}
                          name="email"
                          color="primary"
                        />
                      }
                      label="پست الکترونیکی"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.phone}
                          onChange={handleChange}
                          name="phone"
                          color="primary"
                        />
                      }
                      label="شماره همراه"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.gender}
                          onChange={handleChange}
                          name="gender"
                          color="primary"
                        />
                      }
                      label="جنسیت"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.birthday}
                          onChange={handleChange}
                          name="birthday"
                          color="primary"
                        />
                      }
                      label="تاریخ تولد"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.company}
                          onChange={handleChange}
                          name="company"
                          color="primary"
                        />
                      }
                      label="شرکت"
                    />
                  </GridItem>
                  <GridItem item xs={4}>
                    <Typography variant="h4">محل سکونت</Typography>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.city}
                          onChange={handleChange}
                          name="city"
                          color="primary"
                        />
                      }
                      label="شهر"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.country}
                          onChange={handleChange}
                          name="country"
                          color="primary"
                        />
                      }
                      label="کشور"
                    />
                    <Divider my={3} mb={4} />
                    <Typography variant="h4">نحوه جذب کاربر</Typography>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.channel}
                          onChange={handleChange}
                          name="channel"
                          color="primary"
                        />
                      }
                      label="کانال"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.campDest}
                          onChange={handleChange}
                          name="campDest"
                          color="primary"
                        />
                      }
                      label="کمپین مبدا"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.campMedia}
                          onChange={handleChange}
                          name="campMedia"
                          color="primary"
                        />
                      }
                      label="رسانه کمپین"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.campName}
                          onChange={handleChange}
                          name="campName"
                          color="primary"
                        />
                      }
                      label="نام کمپین"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.refHost}
                          onChange={handleChange}
                          name="refHost"
                          color="primary"
                        />
                      }
                      label="میزبان ارجاع دهنده"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.refUrl}
                          onChange={handleChange}
                          name="refUrl"
                          color="primary"
                        />
                      }
                      label="URL ارجاع‌دهنده"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.landingPage}
                          onChange={handleChange}
                          name="landingPage"
                          color="primary"
                        />
                      }
                      label="Landing Page"
                    />
                  </GridItem>
                  <GridItem item xs={4}>
                    <Typography variant="h4">فعالیت</Typography>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.identified}
                          onChange={handleChange}
                          name="identified"
                          color="primary"
                        />
                      }
                      label="شناسایی شده"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.totalTime}
                          onChange={handleChange}
                          name="totalTime"
                          color="primary"
                        />
                      }
                      label="زمان کلی"
                    />
                    <Divider my={3} mb={4} />
                    <Typography variant="h4">وضعیت فعالیت</Typography>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.totalSession}
                          onChange={handleChange}
                          name="totalSession"
                          color="primary"
                        />
                      }
                      label="کل جلسات"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.createdOn}
                          onChange={handleChange}
                          name="createdOn"
                          color="primary"
                        />
                      }
                      label="زمان ایجاد"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.lastSeen}
                          onChange={handleChange}
                          name="lastSeen"
                          color="primary"
                        />
                      }
                      label="آخرین بازدید"
                    />
                  </GridItem>
                </Grid>
              </FormGroup>
            )}
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => handleClick((c) => !c)}
            color="primary"
            variant="contained"
            size="large"
          >
            اعمال فیلترها
          </Button>
          <Button
            autoFocus
            onClick={() => handleClick((c) => !c)}
            color="primary"
            variant="outlined"
            size="large"
          >
            بازگشت به حالت اولیه
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FilterOptionsModal;
