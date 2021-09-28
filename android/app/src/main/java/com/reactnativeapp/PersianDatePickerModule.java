package com.reactnativeapp; // replace com.your-app-name with your app’s name

import android.app.DatePickerDialog;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.mohamadamin.persianmaterialdatetimepicker.date.DatePickerDialog;
import com.mohamadamin.persianmaterialdatetimepicker.utils.PersianCalendar;
import com.facebook.react.bridge.WritableMap;

import java.util.Map;
import java.util.HashMap;

public class PersianDatePickerModule extends ReactContextBaseJavaModule implements DatePickerDialog.OnDateSetListener {
    private Promise mPromise;

    public PersianDatePickerModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "PersianDatePicker";
    }

    @ReactMethod
    public void showDatePicker(Promise promise) {
        mPromise = promise;
        PersianCalendar persianCalendar = new PersianCalendar();
        DatePickerDialog datePickerDialog = DatePickerDialog.newInstance(
                PersianDatePickerModule.this,
                persianCalendar.getPersianYear(),
                persianCalendar.getPersianMonth(),
                persianCalendar.getPersianDay()
        );
        datePickerDialog.show(getCurrentActivity().getFragmentManager(), "Datepickerdialog");
    }

    @ReactMethod
    public void setDatePicker(int year, int month, int day, Promise promise) {
        mPromise = promise;
        PersianCalendar persianCalendar = new PersianCalendar();
        DatePickerDialog datePickerDialog = DatePickerDialog.newInstance(
                PersianDatePickerModule.this,
                year,
                month + 1,
                day
        );
        datePickerDialog.show(getCurrentActivity().getFragmentManager(), "Datepickerdialog");
    }

    @Override
    public void onDateSet(DatePickerDialog view, int year, int monthOfYear, int dayOfMonth) {
//        mPromise.resolve(year, monthOfYear + 1, dayOfMonth);
//        String date = "Date " + year;
        WritableMap map = Arguments.createMap();
        map.putInt("year", year);
        map.putInt("month", monthOfYear + 1);
        map.putInt("day", dayOfMonth);
        mPromise.resolve(map);
    }
}
