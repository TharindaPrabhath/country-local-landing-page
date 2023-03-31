import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useViewport from '../../../hooks/useViewport';

interface WhenPopoverProps {
  when: Date | null;
  onDateChange: (date: Date | null) => void;
}

const WhenPopover = ({ when, onDateChange }: WhenPopoverProps) => {
  const { width } = useViewport();
  return (
    <DatePicker
      selected={when}
      onChange={(date) => onDateChange(date)}
      monthsShown={width > 1024 ? 2 : 1}
      inline
    />
  );
};
export default WhenPopover;
