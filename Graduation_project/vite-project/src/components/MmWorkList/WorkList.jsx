import { useState } from 'react';
import WorkCard from '../MmWorkCard/WorkCard';
import './WorkList.css';

const WorkList = () => {
    const [items] = useState(() => {
        const stored = localStorage.getItem("items");
        return stored ? JSON.parse(stored) : [];
    });

    return (
        <div className="work-list">
            {items.length === 0 ? (
                <h2>Soon..!</h2>
            ) : (
                items.map((item) => (
                    <WorkCard key={item.id} {...item} />
                ))
            )}
        </div>
    );
};

export default WorkList;
