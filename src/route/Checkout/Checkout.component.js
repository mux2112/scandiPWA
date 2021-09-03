import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import './Checkout.extension.style.scss';
import ProgressBar from 'Route/ProgressBar/ProgressBar.component';

export class Checkout extends SourceCheckout {
    constructor(){
        super();
        this.state={
            progressPoints:[
                {pointNumber: 1, pointDescription: 'Shipping', progressStep:'SHIPPING_STEP', id: 'shipping'},
                {pointNumber: 2, pointDescription: 'Review&Payments', progressStep:'BILLING_STEP', id: 'review-payments'}
            ]
        }
    }
    render(){
        const { progressPoints } = this.state;
        const { checkoutStep } = this.props;
        return(
            <>
                <ProgressBar
                    progressPoints={ progressPoints }
                    progressStep={ checkoutStep }
                />
                <SourceCheckout
                    {...this.props}
                />
            </>
        )
    }
}

export default Checkout;