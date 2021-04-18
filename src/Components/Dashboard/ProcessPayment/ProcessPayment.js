import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardFrom from './SimpleCardFrom';
const stripePromise = loadStripe('pk_test_51Ie1uYANAHlg54ywkhHhhukT9k9vSy76kAKsC1tSha62RyGnIvKDEsBFQmQTZyndJUsh6yGDQk36BLBpe8JLIjej00vKqakrUD');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardFrom></SimpleCardFrom>
        </Elements>

    );
};
export default ProcessPayment;