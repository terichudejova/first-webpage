import React from 'react';
import "./AddressMap.css";

const AddressMap = () => {
    return (
        <div className="google-map-code">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1280.3891682630006!2d14.405056477694288!3d50.07171278457971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b95f57ede2621%3A0x98dde762c11f489f!2zU3RhcsOhIMWha29sYQ!5e0!3m2!1scs!2scz!4v1722364731147!5m2!1scs!2scz"
                width="500"
                height="350"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
            />
        </div>
    );
};
export { AddressMap };
