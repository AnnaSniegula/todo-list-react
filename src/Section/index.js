import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section">
        <header className="section__header">
            <h1 className="section__title--tasks">{title}</h1>
            {extraHeaderContent}
        </header>
        {body}
    </section>
);

export default Section;