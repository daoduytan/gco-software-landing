import { Container, Section, Title } from '../ui';

const Feedback = () => {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12" data-aos="slide-up">
          <Title title="Khách hàng nói gì về chúng tôi?"></Title>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((i, index) => {
            return (
              <div
                key={i}
                data-aos="slide-up"
                data-aos-delay={150 * index}
                className="bg-slate-100 p-8 rounded-lg"
              >
                <p className="mb-4 text-lg font-medium">
                  Điều làm tôi hài lòng nhất về GCO Software chính là đội ngũ
                  nhân viên từ tư vấn viên đến bộ phận kỹ thuật thực hiện dự án
                  đều rất thân thiện, hỗ trợ nhiệt tình và chuyên nghiệp.
                </p>
                <div className="">
                  <span className="block font-bold ">Chu Thuý An</span>
                  <span className="text-sm text-slate-600">
                    Quản lý dự án Brity.vn
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export { Feedback };
