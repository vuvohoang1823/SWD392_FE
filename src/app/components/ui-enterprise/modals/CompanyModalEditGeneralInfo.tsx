import { EditButton } from "../../button/buttons";
import { useState } from "react";
import { UploadShowIcon, UploadShowImage } from "../../input/upload-input";
import { CustomFormModal } from "../../modal/modal";
import { FormInput, FormTextArea } from "../../input/inputs";
import { Col, Form, Row } from "antd";
import { IdDocuments } from "../../../../constants/id-documents";
import { CompanyDetail } from "../../../models/company";
import { skills } from "../../../../constants/skill";
import { SelectFix, SelectMultiple } from "../../select/select";

export default function CompanyModalEditGeneralInfo() {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const initialValues: CompanyDetail = {
    companyName: "FPT Software",
    website: "http://domainexpansion.com",
    videoLink: "https://youtu.be/dQw4w9WgXcQ?si=kCbyzyW8_XaVT8-j",
    companySize: "10-20",
    introduction:
      "This is the place for cooking, like Gordon's grilled cheese sandwich.",
    industryFields: [
      {
        label: "name",
        value: "name",
        skills: [
          {
            label: "Front-end Developer",
            value: "Front-end Developer",
          },
          {
            label: "Front-end Developer",
            value: "Front-end Developer",
          },
          {
            label: "Front-end Developer",
            value: "Front-end Developer",
          },
        ],
      },
      {
        label: "name",
        value: "name",
        skills: [
          {
            label: "Front-end Developer",
            value: "Front-end Developer",
          },
          {
            label: "Front-end Developer",
            value: "Front-end Developer",
          },
          {
            label: "Front-end Developer",
            value: "Front-end Developer",
          },
        ],
      },
    ],
    enterpriseCountry: { label: "Việt Nam", value: "vn" },
    companyDocument: "FunnyMemeFrom9GAG.png",
    registrationDocumentType: "Giấy phép ĐKKD",
    identificationNumber: 333333333333333,
    companyCountry: "Việt Nam",
    taxNumber: 33333333333333,
    address: "Đường D1, Đ. D1, Phường Tân Phú, Quận 9, Hồ Chí Minh, Việt Nam",
    companyEmail: "CoolMathGame@gmail.com",
    companyPhone: "33333333333333",
  };

  return (
    <>
      <EditButton onClick={() => setOpen(true)} />
      <CustomFormModal
        title="THÔNG TIN CHUNG"
        open={open}
        onCancel={() => {
          handleCancel();
          form.resetFields();
        }}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              handleSubmit(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="CompanyEditGeneralInfo"
          initialValues={initialValues}
        >
          <UploadShowIcon />
          <UploadShowImage />
          <Row>
            <Col span={10}>
              <Form.Item
                name="companyName"
                label="Tên công ty"
                rules={[
                  {
                    type: "string",
                    required: true,
                  },
                ]}
              >
                <FormInput />
              </Form.Item>
            </Col>
            <Col span={10} offset={4}>
              <Form.Item
                name="companySize"
                label="Qui mô công ty"
                rules={[
                  {
                    type: "string",
                    required: true,
                  },
                ]}
              >
                <SelectFix
                  defaultValue="passport"
                  onChange={() => {}}
                  options={IdDocuments}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="website"
                label="Trang công ty"
                rules={[
                  {
                    type: "string",
                    required: true,
                  },
                ]}
              >
                <FormInput />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="videoLink"
                label="Video công ty"
                rules={[
                  {
                    type: "string",
                    required: true,
                  },
                ]}
              >
                <FormInput />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="introduction"
                label="Miêu tả"
                rules={[
                  {
                    type: "string",
                    required: true,
                  },
                ]}
              >
                <FormTextArea />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="industryFields"
                label="Ngành nghề"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <SelectMultiple
                  options={skills}
                  defaultValue={initialValues.industryFields.map(
                    (field) => field.value,
                  )}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </CustomFormModal>
    </>
  );
}