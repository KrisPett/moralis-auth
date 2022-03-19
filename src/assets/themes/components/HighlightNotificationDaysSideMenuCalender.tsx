import PickersDay, {PickersDayProps} from "@mui/lab/PickersDay";
import addDays from "date-fns/addDays";
import isSameDay from "date-fns/isSameDay";
import {RootModel} from "../../../root/RootModel";

const HighlightNotificationDaysSideMenuCalender = (
    date: Date,
    selectedDates: Array<Date | null>,
    pickersDayProps: PickersDayProps<Date>,
    rootData: RootModel) => {

    const calculateWhichDateToHighlight = () => {
        let tmpArray = [{}];
        rootData.notifyMessages.forEach(e => {
            let mockData = {
                date: addDays(new Date(e.date), 0),
                styles: {
                    backgroundColor: "green",
                    '&:hover': {backgroundColor: "darkgreen"}
                }
            }
            tmpArray.push(mockData)
        })
        return tmpArray;
    }

    const matchedStyles = calculateWhichDateToHighlight().reduce((a, v) => {
        // @ts-ignore
        return isSameDay(date, v.date) ? v.styles : a;
    }, {});

    return (
        <PickersDay
            {...pickersDayProps}
            sx={{
                ...matchedStyles
            }}
        />
    );
};

export default HighlightNotificationDaysSideMenuCalender;
