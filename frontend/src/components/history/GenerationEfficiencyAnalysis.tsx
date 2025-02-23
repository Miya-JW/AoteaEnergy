import React from 'react';

const GenerationEfficiencyAnalysis: React.FC = () => {
    return (
        <div className='flex-column-left mt-50 ml-50'>
            <div className='flex-column-left'>
                <div className='font-24'>Week-over-Week:</div>
                <div className='mt-10 flex-left-center font-18'>
                    <div>Change:</div>
                    <div className='ml-10'>+1.8%</div>
                </div>
                <div className='mt-10 flex-left-center font-18'>
                    <div>Note:</div>
                    <div className='ml-10'>Sunnier week boosts efficiency.</div>
                </div>
            </div>

            <div className='flex-column-left mt-30'>
                <div className='font-24'>Monthly Trend:</div>
                <div className='mt-10 flex-left-center font-18'>
                    <div>Average:</div>
                    <div className='ml-10'>17.5%</div>
                </div>
                <div className='mt-10 flex-left-center font-18'>
                    <div>Note:</div>
                    <div className='ml-10'>Efficiency rises with longer days.</div>
                </div>
            </div>

            <div className='flex-column-left mt-30'>
                <div className='font-24'>Year-to-Date:</div>
                <div className='mt-10 flex-left-center font-18'>
                    <div>Average:</div>
                    <div className='ml-10'>18.9%</div>
                </div>
                <div className='mt-10 flex-left-center font-18'>
                    <div>Note:</div>
                    <div className='ml-10'>Warmer year improves output.</div>
                </div>
            </div>

            <div className='flex-column-left mt-30'>
                <div className='font-24'>Seasonal Impact:</div>
                <div className='mt-10 flex-left-center font-18'>
                    <div>Current:</div>
                    <div className='ml-10'>20.1% (Spring)</div>
                </div>
                <div className='mt-10 flex-left-center font-18'>
                    <div>Note:</div>
                    <div className='ml-10'>Ideal spring conditions.</div>
                </div>
            </div>

        </div>
    );
};

export default GenerationEfficiencyAnalysis;