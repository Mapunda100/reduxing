import React from 'react';

const Component = () => {
    return (
        <div>
            <button type="button" class="btn btn-primary position-relative offset-md-11 mt-3">
                 Inbox
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        99+
                <span class="visually-hidden">unread messages</span>
                </span>
            </button>
        </div>
    );
};

export default Component;